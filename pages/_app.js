import "styles/globals.scss";
// import '../styles/pages/DeptLayout.css';
import '../styles/pages/ProjectCarousel.css';
import "../styles/alice-carousel.css";
// import "../styles/slick.css";
// import "../styles/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "react-big-calendar/lib/css/react-big-calendar.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
