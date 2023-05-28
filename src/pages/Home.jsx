import BodyOne from '../components/bodyOne/BodyOne';
import BodyThree from '../components/bodyThree/BodyThree';
import BodyTwo from '../components/bodyTwo/BodyTwo';
import Header from '../components/header/header';
import LeftSidebar from '../components/LeftSideBar/LeftSidebar';
import ChatSide from '../components/chatSide/ChatSide';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <LeftSidebar />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              <BodyOne />
            </div>
            <div style={{ flex: 1 }}>
              <BodyTwo />
            </div>
            <div style={{ flex: 1 }}>
              <BodyThree />
            </div>
          </div>
          <ChatSide />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
