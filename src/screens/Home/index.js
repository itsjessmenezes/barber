import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../Api';
import BarberItem from '../../components/BarberItem';
import SearchIcon from '../../assets/search.svg';
import LocationIcon from '../../assets/my_location.svg';

import { Container, Wrapper, Header, FindBarber, SearchButton, FindYou, FindYouInput, LocationFinder, LoadingIcon, BarbersList } from './styles';


export default () => {

  const navigation = useNavigation();
  const [ locationText, setLocationText ] = useState('');
  const [ coords, setCoords ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ list, setList ] = useState([]);
  const [ refreshing, setRefreshing ] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    if(result == 'granted') {

      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition((info)=>{
        setCoords(info.coords);
        getBarbers();

      });
    }
  }

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let lng = null;

    if(coords) {
      lat = coords.latitude;
      lgn = coords.longitude;
    }

    let res = await Api.getBarbers(lat, lng, locationText);
    
    
    if(res.error == '') {
      if(res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);

    } else {

      alert("Erro:" +res.error);
    }

    setLoading(false);
  }

  //pegar a lista de barbers quando abrir a tela
  useEffect(() => {
    getBarbers();
  }, []);


  const onRefresh= () => {
    setRefreshing(false);
    getBarbers();
  }

  //zerar as coordenadas e gerar uma nova pesquisa
  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  }

  return (
    <Container>
      <Wrapper refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Header>
          <FindBarber numberOfLines={2}>Encontre o seu barbeiro favorito</FindBarber>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </Header>

        <FindYou>
          <FindYouInput
          placeholder="Onde você está?"
          placeholderTextColor="#FFFFFF"
          value={locationText}
          onChangeText={text=>setLocationText(text)}
          onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <LocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
      </FindYou>

      { loading && <LoadingIcon size="large" color="#FFFFFF" /> }

      <BarbersList>
        {list.map((item, k) =>(
          <BarberItem key={k} data={item} />
        ))}
      </BarbersList>

    </Wrapper>
    </Container>
  );
}