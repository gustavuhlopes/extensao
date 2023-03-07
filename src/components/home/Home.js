import "./home.css";
import "../../app.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function HandleSubmit(event) {
    navigate("/");
  }

  return (
    <div className="container">
      <ul class="nav nav-tabs nav-justified" id="popoutTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="wiki-tab"
            data-toggle="tab"
            href="/home"
            role="tab"
            aria-controls="wiki"
            aria-selected="true"
          >
            Wiki
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="links-tab"
            data-toggle="tab"
            href="/links"
            role="tab"
            aria-controls="links"
            aria-selected="false"
          >
            Links
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="phone-tab"
            data-toggle="tab"
            href="/phone"
            role="tab"
            aria-controls="phone"
            aria-selected="false"
          >
            Ext List
          </a>
        </li>
      </ul>

      <div className="sub-container">
        <div className="input-group">
          <input
            type="search"
            class="form-control input-wiki-search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            required=""
          />

          <button type="submit" class="btn btn-outline-primary">
            <span class="sr-only">search</span>
            <span class="loading">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </span>
          </button>
        </div>

        <div id="results-header" class="result-message mb-2">
          <span classname="pre">Search results for:</span>{" "}
          <span classname="body">a</span>
        </div>

        <div className="results-body">
          <article class="results-box">
            <header class="result-box-header">
              <p class="entry-title">
                <a
                  href="https://wiki.brzinsurance.com/?post_type=knowledgebase&amp;p=47"
                  target="wiki"
                >
                  How to do a Certificate of Liability Insurance
                </a>
              </p>
            </header>
            <div class="result-box-summary">
              <p>
                Open EZLynx Look for the Client Click on Documents ;
                Documents Folder Click on "Add
              </p>
            </div>
            <footer class="result-box-footer"></footer>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Home;
