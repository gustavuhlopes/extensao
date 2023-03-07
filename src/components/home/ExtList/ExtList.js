import React from "react";
import "../../../app.css";
import "./extList.css";

export default function ExtList() {
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
      </div>
    </div>
  );
}
