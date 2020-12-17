import React, { useState, useEffect } from 'react';
import Header from './Layout/Header.js';
import Footer from './Layout/Footer.js';
import Content from './Layout/Content.js';
import floater1 from './img/Sign.png';
import floater2 from './img/AktivismeDag_floater2.png';


const App = () => {
  const apiUrl = "http://lisagruenwaldt.com/huset_wp/wp-json/wp/v2/unicef-content";

  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [pageContent, setPageContent] = useState({});

  /**
  * Load article via Wordpress API.
  */
  const fetchDataFromAPI = async (path) => {
    return await fetch(path).then((res) => res.json());
  };

  const fetchData = () => {
    setLoaded(false);
    fetchDataFromAPI(apiUrl)
      .then((pages) => {
        let p = {};
        for (let i = 0; i < pages.length; i++) {
          if (pages[i].slug === currentPage) {
            p = pages[i];
          }
        }

        setPageContent(p);
        setLoaded(true);
      })
      .catch(() => {
      
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const navigateToPage = (page) => {
    setCurrentPage(page);
  }

  console.log(pageContent);

  return (
    <>
      <header>
        <Header 
          currentPage={currentPage}
          navigateToPage={navigateToPage}
          title={pageContent.pagetitle}
          pagetitel2={pageContent.pagetitel2}
          description={pageContent.description}
          learnMore={pageContent.learnmore}
        />
      </header>

      <main>
      {
        loaded ? (
          <Content 
            currentPage={currentPage} 
            pageContent={pageContent} 
          />) : (
            <div>Loading...</div>
          )
      }

<img className="floater1" src={floater1} />
<img className="floater2" src={floater2} />

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
