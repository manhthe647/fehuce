import Img404 from '../../assets/images/404notfound.png';

const ErrorPage = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <img src={Img404} alt="404 Not Found" />
    </div>
  );
};

export default ErrorPage;