import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router'
export default function Home() {
    // Создаем экземпляр роутера
    const router = useRouter()

    // Создаем функцию для перехода на страницу home.js
    const handleLogin = () => {
      router.push('/vhod')
    }
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/company-logo.png" alt="Company Logo" width={350} height={50} />
        </div>
        <div className={styles.navigation}>
          <ul>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Наши партнеры</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div className={styles.userActions}>
        <button className={styles.loginButton} onClick={handleLogin}>
        Войти
      </button>
  <button className={styles.registerButton}>Регистрация</button>
  <div className={styles.contactInfo} style={{ marginBottom: '0.5rem' }}>
    <p>Свяжитесь с нами:</p>
    <p>Телефон: +7 (XXX) XXX-XX-XX</p>
  </div>
</div>

      </div>     
       <div className={styles.hero}>
        <Image src="/images/background.jpg" alt="Background image" layout="fill" objectFit="cover" />
        <div className={styles.heroText}>
          <Fade bottom>
            <h1>Боишься прогореть из-за неправильно выбранного места?</h1>
          </Fade>
          <Fade bottom>
            <p>Сервис поиска коммерческой недвижимости с помощью инструментов глубокой аналитики</p>
          </Fade>
          <Fade bottom>
            <button className={styles.button}>Снять наиболее подходящий вариант</button>
          </Fade>
      
        </div>
      </div>
      <div className={styles.spaceAboveContent}></div> 
      <div className={styles.content}>
        <div className={styles.textImageContainer}>
          <Fade bottom>
            <div className={styles.text}>
              <h2>О  платформе</h2>
              <p>Мы - сервис поиска и аналитики недвижимости. 
Помогаем найти помещение для бизнеса 
быстро и  просто, даем необходимую информацию 
о месте, предоставляем подробную аналитику, 
что поможет принять правильное 
управленческое решение, а так же 
уменьшить риски при открытии.</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className={styles.image}>
              <Image src="/images/your-image1.svg" alt="Image 1" width={400} height={300} />
            </div>
          </Fade>
        </div>

        <div className={styles.textImageContainer}>
          <Fade bottom>
            <div className={styles.image}>
              <Image src="/images/your-image2.svg" alt="Image 2" width={400} height={300} />
            </div>
          </Fade>
          <Fade bottom>
            <div className={styles.text}>
              <h2>Если вы:</h2>
              <p>начинающий предприниматель  

масштабируетесь  

выходите на новые рынки, 

  то наше решение для вас!</p>
            </div>
          </Fade>
        </div>

        <div className={styles.textImageContainer}>
          <Fade bottom>
            <div className={styles.text}>
              <h2>Быстрый поиск или сдача помещения с 
предоставлением данных o: 
</h2>
              <p>трафике, 

потребителях, 

конкурентах 

 уникальные рекомендации под 
каждый тип бизнеса за низкую стоимость. </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className={styles.image}>
              <Image src="/images/your-image3.svg" alt="Image 3" width={400} height={300} />
            </div>
          </Fade>
        </div>

        <h2>Наши партнеры</h2>
<div className={styles.partners}>
  <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
    <Fade bottom>
      <Image src="/images/partner1.svg" alt="Partner 1 logo" width={200} height={100} className={styles.image}/>
    </Fade>
  </a>
  <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
    <Fade bottom>
      <Image src="/images/partner2.svg" alt="Partner 2 logo" width={200} height={100} className={styles.image}/>
    </Fade>
  </a>
  <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
    <Fade bottom>
      <Image src="/images/partner3.svg" alt="Partner 3 logo" width={200} height={100} className={styles.image}/>
    </Fade>
  </a>
</div>
<Fade bottom>

<div className={styles.advantages}>
  <h2>Преимущества нашего сервиса</h2>
  <div className={styles.advantage}>
    <Image src="/images/advantage1.svg" alt="Advantage 1" width={100} height={100} />
    <p>Цена</p>
  </div>
  <div className={styles.advantage}>
    <Image src="/images/advantage2.svg" alt="Advantage 2" width={100} height={100} />
    <p>Автоматизация</p>
  </div>
  <div className={styles.advantage}>
    <Image src="/images/advantage3.svg" alt="Advantage 3" width={100} height={100} />
    <p>Доступность</p>
  </div>
  <div className={styles.advantage}>
    <Image src="/images/advantage4.svg" alt="Advantage 4" width={100} height={100} />
    <p>Рекомендации</p>
  </div>
</div>
</Fade>


        <h2>Отзывы наших клиентов</h2>

        <div className={styles.testimonials}>
          <Fade bottom>
            <div className={styles.testimonial}>
              <Image src="/images/client1.jpg" alt="Client 1 photo" width={100} height={100} className={styles.clientPhoto} />
              <div className={styles.clientInfo}>
                <p className={styles.clientName}>Иван Иванов</p>
                <p className={styles.clientRole}>Директор ООО "Рога и копыта"</p>
              </div>
              <p className={styles.clientText}>"Благодаря Сервис поиска коммерческой недвижимости с помощью инструментов глубокой аналитики</p>
            </div>
          </Fade>

          <Fade bottom>
            <div className={styles.testimonial}>
              <Image src="/images/client2.jpg" alt="Client 2 photo" width={100} height={100} className={styles.clientPhoto} />
              <div className={styles.clientInfo}>
                <p className={styles.clientName}>Мария Петрова</p>
                <p className={styles.clientRole}>Владелица сети магазинов "Цветочный рай"</p>
              </div>
              <p className={styles.clientText}>"Сервис Сервис поиска коммерческой недвижимости с помощью инструментов глубокой аналитики</p>
            </div>
          </Fade>

          <Fade bottom>
            <div className={styles.testimonial}>
              <Image src="/images/client3.jpg" alt="Client 3 photo" width={100} height={100} className={styles.clientPhoto} />
              <div className={styles.clientInfo}>
                <p className={styles.clientName}>Алексей Смирнов</p>
                <p className={styles.clientRole}>Основатель стартапа "SmartHome"</p>
              </div>
              <p className={styles.clientText}>"СервисСервис поиска коммерческой недвижимости с помощью инструментов глубокой аналитики </p>
            </div>
          </Fade>
        </div>

        <h2>Наши контакты</h2>

        <div className={styles.mapContainer}>
        <YMaps>
    <div>
    <Map defaultState={{ center: [45.03, 37.57], zoom: 9 }} width="100%" height="400px" instanceRef={(ref) => ref && ref.behaviors.disable('scrollZoom')} modules={['control.ZoomControl', 'control.FullscreenControl']} options={{ controls: ['zoomControl', 'fullscreenControl'] }}>
    <Placemark 
    geometry={{ 
      coordinates: [45.03, 37.55], // Координаты метки 
      type: 'Point', 
      // Тип геометрии 
    }} 
    properties={{ 
      hintContent: "Головной офис", // Подсказка при наведении на метку 
      balloonContent: "Россия, 197341,Краснодар, ул. 40 лет победы,офис 3-504, 3-502 (главный офис)", 
      // Содержимое балуна метки 
    }} 
    options={{ 
      iconColor: '#ff0000', // Цвет метки (красный)
    }}
    />
</Map>

    </div>
  </YMaps>
        </div>

        <footer className={styles.footer}>
  <div className={styles.contacts}>
    <div className={styles.info}>
      <Fade bottom>
        <p>Сервис создан при поддержке и финансировании Фонда Содействия инновациям https://fasie.ru</p>
        <Image src="/images/logo.jpg" alt="Client 3 photo" width={100} height={100}  />
      </Fade>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
}
