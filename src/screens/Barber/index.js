import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Api from '../../Api';
import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg'
import NavNextIcon from '../../assets/nav_next.svg'

import {
  Container,
  Scroller,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  HeaderSwiper,
  PageBody,
  ProfileBarberInfo,
  LoadingIcon,
  UserAvatar,
  BarberInfo,
  BarberUserName,
  FavButton,
  BackButton,
  Services,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseBtn,
  Comments,
  CommentsItem,
  CommentsInfo,
  CommentsName,
  CommentsBody,



} from './styles';

export default () => {
  
  const [ loading, setLoading ] = useState(false);
  const [ favorited, setFavorited ] = useState(false);
  const [ selectedService, setSelectedService ] = useState(null);
  const [ showModal, setShowModal ] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();


  const handleBackButton = () => {
    navigation.goBack();
  }
  

  const [ userInfo, setUserInfo ] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars
  });


  useEffect(()=>{
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);
      if(json.error == '') {
        setUserInfo(json.data);
        setFavorited(json.data.favorited);

        console.log(json.data.available);

      } else {
        alert("Erro: "+json.error);
      }

      setLoading(false);

    }
    getBarberInfo();
  },[]);

  const handleFavClick = () => {
    setFavorited( !favorited );
    Api.setFavorite( userInfo.id );
  }

  const handleServiceChoose = (key) => {
    setSelectedService(key);
    setShowModal(true);
  }

  return (
    <Container>
     <Scroller>

        {userInfo.photos && userInfo.photos.length > 0
        ? <Swiper
        style={{height: 240}}
        dot={<SwipeDot />}
        activeDot={<SwipeDotActive />}
        paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
        autoplay={true}
        >
          {userInfo.photos.map((item, key)=>(
            <SwipeItem key={key}>
              <SwipeImage source={{uri: item.url}} resizeMode="cover" />
            </SwipeItem>
          ))}
        </Swiper>
        : <HeaderSwiper>
          </HeaderSwiper>
          }


      <PageBody>
        <ProfileBarberInfo>
          <UserAvatar source={{uri: userInfo.avatar}} />
          <BarberInfo>
            <BarberUserName>{userInfo.name}</BarberUserName>
            <Stars stars={userInfo.stars} showStars={true} />
          </BarberInfo>

          <FavButton onPress={handleFavClick}>
            {favorited
            ? <FavoriteFullIcon width="24" height="24" fill="#FF0000"/>
            : <FavoriteIcon width="24" height="24" fill="#FF0000"/>
            }
          </FavButton>
        </ProfileBarberInfo>

        {loading && <LoadingIcon size="large" color="#000000" /> }

        {userInfo.services &&
        <Services>
          <ServicesTitle>Lista de serviços</ServicesTitle>

          {userInfo.services.map((item, key)=>(
            <ServiceItem key={key}>
              <ServiceInfo>
                <ServiceName>{item.name}</ServiceName>
                <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
              </ServiceInfo>
              <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                <ServiceChooseBtn>Agendar</ServiceChooseBtn>
              </ServiceChooseButton>
            </ServiceItem>
          ))}
        </Services>

        }

        {userInfo.testimonials && userInfo.testimonials.length > 0 &&
          <Comments>
            <Swiper
            style={{height: 110}}
            showsPagination={false}
            showsButtons={true}
            prevButton={<NavPrevIcon width="35" height="35" fill="#000000" />}
            nextButton={<NavNextIcon width="35" height="35" fill="#000000" />}
            >
              {userInfo.testimonials.map((item, key)=> (
                <CommentsItem key={key}>
                    <CommentsInfo>
                      <CommentsName>{item.name}</CommentsName>
                      <Stars stars={item.rate} showNumber={false}/>
                   </CommentsInfo>
                  <CommentsBody>{item.body}</CommentsBody>
                </CommentsItem>
              ))}

            </Swiper>
          </Comments>
        }
      </PageBody>


     </Scroller>

     <BackButton onPress={handleBackButton}>
       <BackIcon width="44" height="44" fill="#FFFFFF" />
     </BackButton>

     <BarberModal
     show={showModal}
     setShow={setShowModal}
     user={userInfo}
     service={selectedService}
     />
    </Container>
  );
}