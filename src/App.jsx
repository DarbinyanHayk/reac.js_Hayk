import { useState } from "react";
import "./App.scss";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quotesId, setQuotesId] = useState(1);

  useEffect(() => {
    axios("https://dummyjson.com/quotes").then((res) =>
      setQuotes(res.data.quotes)
    );
  }, []);

  const handlepreview = (prewiu) => {
    if (prewiu === "next") {
      setQuotesId(quotesId + 1);
    } else if (prewiu === "previous" && quotesId > 1) {
      setQuotesId(quotesId - 1);
    }
  };

  return (
    <div className="App">
      <div className="box">
        {quotes.map((elem) => {
          return elem.id === quotesId ? (
            <div key={elem.id} className="Quote">
              <span className="Quote_id">{elem.id}</span>
              <h3 className="Quote_Quote">quote : {elem.quote}</h3>
              <span className="Quote_autor">autor : {elem.author}</span>
            </div>
          ) : null;
        })}
        <div className="nextPrevious">
          <button
            onClick={() => handlepreview("previous")}
            disabled={quotesId === 1}
          >
            previous
          </button>
          <button
            onClick={() => handlepreview("next")}
            disabled={quotesId === 30}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
