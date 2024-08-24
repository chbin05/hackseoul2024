import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Map from '../../ui/Map';
import Header from '../../ui/Header';
import ButtonWrapper from '../../ui/ButtonWrapper';
import Button from '../../ui/Button';
import { Bounds, MapLocation } from '../../../interfaces/map';
import useHomeService from '../../../services/home';
import { trashInfoAtom } from '../../../recoil/atoms/trashAtom';
import { sendPostMessage } from '../../../modules/postMessage/postMessageSender';
import { MessageType } from '../../../interfaces/postMessge';
import useUserService from '../../../services/user';
import { userLocationAtom } from '../../../recoil/atoms/userAtom';

const Home = () => {
  const trashInfos = useRecoilValue(trashInfoAtom)
  const userLocation = useRecoilValue(userLocationAtom)
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState<MapLocation>({ lat: 37.56014114732037, lng: 126.98241122396543 });
  const [startCollect, setStartCollect] = useState<boolean>(false);
  const homeService = useHomeService();
  const [bounds, setBounds] = useState<Bounds>(null)

  const userService = useUserService()

  const handlePostMessage = useCallback((e) => {
    const { type, payload } = e.data
    if (type === MessageType.coordinate) {
      userService.setCurrentUserLocation(payload.location)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('message', handlePostMessage)
    sendPostMessage({ type: MessageType.coordinate })

    return () => {
      window.removeEventListener('message', handlePostMessage)
    }
  }, [])

  useEffect(() => {
    if (bounds) {
      homeService.fetchAllTrashDataInMap(bounds);
    }
  }, [bounds]);

  useEffect(() => {
    setCurrentLocation(userLocation)
  }, [userLocation])

  const handleStartCollect = useCallback(() => {
    setStartCollect(true);
    navigate('/collect')
  }, []);

  const handleChange = useCallback((e) => {
    setBounds(e.detail?.bounds)
  }, [])

  const handleClickAdd = useCallback(() => {
    navigate('/edit')
  }, [])

  return (
    <>
      <Header />
      <Map onCameraChanged={handleChange} markers={trashInfos.list} center={currentLocation}/>
      <ButtonWrapper>
        <Button title="쓰레기 등록" onClick={handleClickAdd} />
        <Button type="blue" title="수집 시작" onClick={handleStartCollect} />
      </ButtonWrapper>
    </>
  );
};

export default Home;
