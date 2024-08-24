import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Map from '../../ui/Map';
import Header from '../../ui/Header';
import useHomeService from '../../../services/home';
import ButtonWrapper from '../../ui/ButtonWrapper';
import Button from '../../ui/Button';
import { Bounds, MapLocation } from '../../../interfaces/map';
import { useRecoilValue } from 'recoil';
import { trashInfoAtom } from '../../../recoil/atoms/trashAtom';

const Home = () => {
  const trashInfos = useRecoilValue(trashInfoAtom)
  const navigate = useNavigate();
  const [userPosition, setUserPosition] = useState<MapLocation>({ lat: 37.56014114732037, lng: 126.98241122396543 });
  const [startCollect, setStartCollect] = useState<boolean>(false);
  const homeService = useHomeService();
  const [bounds, setBounds] = useState<Bounds>(null)
  useEffect(() => {
    if (bounds) {
      homeService.fetchAllTrashDataInMap(bounds);
    }
  }, [bounds]);

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

  const locations = useMemo(() => {
    return trashInfos.list.map(({location}) => location)
  }, [trashInfos])

  return (
    <>
      <Header />
      <Map onCameraChanged={handleChange} locations={locations} center={locations[0]}/>
      <ButtonWrapper>
        <Button title="쓰레기 등록" onClick={handleClickAdd} />
        <Button type="blue" title="수집 시작" onClick={handleStartCollect} />
      </ButtonWrapper>
    </>
  );
};

export default Home;
