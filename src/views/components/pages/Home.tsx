import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

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
import { userIdAtom, userLocationAtom } from '../../../recoil/atoms/userAtom';
import { parse } from 'query-string';

const Home = () => {
  const setUserId= useSetRecoilState(userIdAtom)
  const trashInfos = useRecoilValue(trashInfoAtom)
  const userLocation = useRecoilValue(userLocationAtom)
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState<MapLocation>(userLocation || null);
  const homeService = useHomeService();
  const [bounds, setBounds] = useState<Bounds>(null)

  const userService = useUserService()

  const handlePostMessage = useCallback((e) => {
    const { type, payload } = e?.data && JSON.parse(e?.data) || { type: null, payload: {} }
    console.log({type, payload})
    if (type === MessageType.coordinate && payload.location) {
      userService.setCurrentUserLocation(payload.location)
    }
  }, [userService])

  useEffect(() => {
    const parsedQuery = parse(window.location.search)
    parsedQuery.userId && setUserId(parsedQuery.userId)
    window.document.addEventListener('message', handlePostMessage)
    setInterval(() => {
      sendPostMessage({ type: MessageType.coordinate })
    }, 3000)
  }, [])

  useEffect(() => {
    if (bounds) {
      homeService.fetchAllTrashDataInMap(bounds);
    }
  }, [bounds]);

  useEffect(() => {
    if (!currentLocation) {
      setCurrentLocation(userLocation)
    }
  }, [userLocation])

  const handleStartCollect = useCallback(() => {
    navigate('/collect')
  }, []);

  const handleDragEnd = useCallback((e) => {
    setBounds(e.detail?.bounds)
  }, [])

  const handleChange = useCallback((e) => {
    if (!bounds) {
      setBounds(e.detail?.bounds)
    }
  }, [bounds])

  const handleClickAdd = useCallback(() => {
    navigate('/edit')
  }, [])

  return (
    <>
      <Header />
      <Map
        onDranEnd={handleDragEnd}
        onChange={handleChange}
        markers={trashInfos.list}
        defaultCenter={currentLocation}
        userLocation={userLocation}/>
      <ButtonWrapper>
        <Button title="쓰레기 등록" onClick={handleClickAdd} />
        <Button type="blue" title="수집 하러가기" onClick={handleStartCollect} />
      </ButtonWrapper>
    </>
  );
};

export default Home;
