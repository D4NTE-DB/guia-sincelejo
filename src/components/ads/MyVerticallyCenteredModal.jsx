import React, { useEffect, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import '../../Ads.css'; // Import your custom styles for ads
import fallbackPromoImg from '../../assets/promos/Ultimos-dias-de-la-promocion-2x1-en-restaurante-la-pampa-OCtubre-2018.jpg';

const MyVerticallyCenteredModal = (props) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);
  const [adKey, setAdKey] = useState(0);

  useEffect(() => {
    if (props.show) {
      // Force a fresh ad load when modal opens
      setAdKey(prev => prev + 1);
      setAdLoaded(false);
      setAdError(false);
    }
  }, [props.show]);

  useEffect(() => {
    if (props.show) {
      // Slight delay ensures the modal is fully visible so AdSense can calculate dimensions
      const timer = setTimeout(() => {
        try {
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
            setAdLoaded(true);
          }
        } catch (error) {
          console.error('Error loading ad:', error);
          setAdError(true);
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [adKey, props.show]);

  const handleClose = () => {
    // Track ad interaction if needed
    trackAdInteraction('modal_closed');
    props.onHide();
  };

  const trackAdInteraction = (action) => {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'ad_interaction', {
        'event_category': 'modal_ad',
        'event_label': action
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ad-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ¡Bienvenido a Food Guía Sincelejo!
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        {/* Main Content */}
        <div className="modal-main-content">
          <h4>Descubre los mejores restaurantes de Sincelejo</h4>
          <p>
            Explora nuestra guía completa de restaurantes, con menús, 
            ubicaciones y promociones especiales.
          </p>
        </div>

        {/* Ad Container */}
        <div className="modal-ad-container">
          {!adLoaded && !adError && (
            <div className="ad-loading">
              <Spinner animation="border" size="sm" />
              <span>Cargando contenido...</span>
            </div>
          )}
          
          {adError && (
            <div className="ad-fallback">
              {/* Fallback content or house ad */}
              <div className="house-ad">
                <img 
                  src={fallbackPromoImg} 
                  alt="Promoción del día"
                  onClick={() => trackAdInteraction('house_ad_clicked')}
                />
                <p>¡Descubre las promociones del día!</p>
              </div>
            </div>
          )}
          
          {/* Google AdSense */}
          <div key={adKey} style={{ display: adError ? 'none' : 'block', width: '100%' }}>
            <ins 
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-7944216786703688"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
          
          {/* Alternative: Custom Ad Space */}
          {/* <div 
            id="custom-ad-space" 
            className="custom-ad"
            style={{ display: adLoaded ? 'block' : 'none' }}
          >
            Custom ad content here
          </div> */}
        </div>

        {/* Disclosure */}
        <div className="ad-disclosure">
          <small>Publicidad</small>
        </div>
      </Modal.Body>
      
      <Modal.Footer>
        <Button onClick={handleClose} variant="success">
          Explorar Restaurantes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;