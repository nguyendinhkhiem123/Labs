import { Suspense , lazy } from 'react'
import { Layout  } from 'antd';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Notfound  from './Component/Notfound/Notfound';
import './App.css';
const Post = lazy(() => import('./Component/Post/Post'));
const PostDetail = lazy(() => import('./Component/PostDetail/PostDetail'));
const { Content} = Layout;
function App() {
  return (
    <Router>
        <Layout className="layout">
          <Header/>
            <Content style={{ 
              
                maxWidth : '1200px',
                width : '100%',
                margin : '40px auto 0 auto',
                height : '100vh'

             }}>
              <div className="site-layout-content">
                  <Suspense fallback={"Loading..."} >
                        <Switch>
                              <Route path="/"  exact component={Post}></Route>
                              <Route path="/post/:slug" component={PostDetail}></Route>
                              <Route component={Notfound}></Route>
                        </Switch>
                  </Suspense>
              </div>
            </Content>

           <Footer/>
          
        </Layout>
  </Router>   
  );
}

export default App;
