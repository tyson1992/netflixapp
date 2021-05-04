import React from 'react';
import Cards from './Cards';
import './index.css';



function App() {

    return (
        <React.Fragment>
            
            <div className="netflix1">
        <Cards imgsrc="https://asianwiki.com/images/d/d9/Start-Up-CP1.jpg"
                    links="https://www.netflix.com/in/title/81290293"
                    sname="Start-UP" />

                <Cards imgsrc="https://m.media-amazon.com/images/M/MV5BNTBlZmE4YzItNTY5Mi00NmIxLTlhZTAtOWIxNjFlNTMzNmI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                    links="https://www.netflix.com/in/title/80180171"
                 sname="KingDom" />

                <Cards imgsrc="https://i.pinimg.com/originals/da/cf/7a/dacf7adf184e48076524688d0ee48dd3.jpg"
                    links="https://www.netflix.com/in/title/80057918"
                  sname="Lucifer" />

                <Cards imgsrc="https://m.media-amazon.com/images/M/MV5BMDQ2YjVmYTktMWM2ZS00MzM5LWE4MDgtNWE0ZTJjNmU5NjJlXkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg"
                    links="https://www.netflix.com/in/title/80192098"
                    sname="Money Heiest" />
                  
                <Cards imgsrc="https://m.media-amazon.com/images/M/MV5BNTNhY2JlMmItMGMzZi00ZTM2LTlmNTItZDBkMGVhNGJhYWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR165,0,630,1200_AL_.jpg"
                    links="https://www.netflix.com/in/title/80236319"
                    sname="Shadow And Bones" />
            </div>


            <br /><br />


            <div className="netflix2">
                <Cards imgsrc="http://1.bp.blogspot.com/-pw7YL3IfAbM/UZ55dRBuBgI/AAAAAAAAlyk/BgRxs6WsvTc/s1600/arrow.jpg"
                    links="https://www.netflix.com/in/title/70242081"
                    sname="Arrow" />

                <Cards imgsrc="https://filmdaily.co/wp-content/uploads/2019/04/Leade-Image-1300x1926.jpg"
                    links="https://www.netflix.com/in/title/80223989"
                    sname="Sabrina Netflix Series" />

                <Cards imgsrc="https://www.assignmentx.com/wp-content/uploads/2020/07/THE-OLD-GUARD-poster.jpg"
                    links="https://www.netflix.com/title/81038963"
                    sname="Old Guard" />

                <Cards imgsrc="https://i.pinimg.com/originals/6e/63/9e/6e639e6b61547571bb358659b6f80abe.jpg"
                    links="https://www.netflix.com/title/80100172"
                    sname="Dark" />

                <Cards imgsrc="https://i.pinimg.com/originals/68/e2/73/68e27392087afcef74b88a3cfcd2e346.jpg"
                    links="https://www.netflix.com/title/80025678"
                    sname="The Crown" />
            </div> 


            </React.Fragment>

        );

}

export default App;