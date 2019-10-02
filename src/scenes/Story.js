import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Redirect, Route, Link, Switch } from "react-router-dom";

import { FormattedMessage } from "react-intl";
import { CookiesProvider } from 'react-cookie';

import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";

import { expandMedia } from "actions/media";

import swipe from "utils/swipe";

import Page from "components/Page";

import Media from "components/Media";
import Story from "components/Story";
import Modal from "components/Modal";
import Popup from "components/Popup/Popup"

import Chapter1 from "./articles/1-Introduction";
import Chapter2 from "./articles/2-Mercury";
import Chapter3 from "./articles/3-ProtectedAreas";
import Chapter4 from "./articles/4-IndigenousTerritories";
import Chapter5 from "./articles/5-Conflicts";

const articles = [
  "/story",
  "/story/mercury",
  "/story/protected-areas",
  "/story/indigenous-territories",
  "/story/conflicts"
];

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      entering: false
    };
    this.nextArticle = this.nextArticle.bind(this);
    this.onStoryEnter = this.onStoryEnter.bind(this);
    this.onStoryEntered = this.onStoryEntered.bind(this);
    this.unexpand = this.unexpand.bind(this);
    this.state = {
      isShowing: false
    }
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  checkCookie() {
    var cookiepopup = this.getCookie("infoamazoniapopup");
    if (cookiepopup == "") {
      this.setState({isShowing: true})
      this.setCookie();
    } else {
      this.setState({isShowing: false})
    }
  }

  setCookie() {
      var d = new Date();
      d.setTime(d.getTime() + (30*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = "infoamazoniapopup=true;" + expires;
  }

  componentDidMount() {
    this.checkCookie();
    this.removeSwipeListeners = swipe(findDOMNode(this), direction => {
      this.nextArticle(direction);
    });
    if (twttr) twttr.widgets.load();
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (
      (!prevProps.location.pathname ||
        location.pathname !== prevProps.location.pathname) &&
      twttr
    ) {
      twttr.widgets.load();
    }
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
    }
  }
  componentWillUnmount() {
    if (this.removeSwipeListeners) {
      this.removeSwipeListeners();
      this.removeSwipeListeners = undefined;
    }
  }
  isLastArticle() {
    const { location } = this.props;
    const idx = articles.findIndex(article => {
      return location.pathname == article;
    });
    if (idx == articles.length - 1) return true;
    return false;
  }
  nextArticle(direction) {
    direction = direction || "left";
    const { location } = this.props;
    const idx = articles.findIndex(article => {
      return location.pathname == article;
    });
    if (direction == "left" && idx < articles.length - 1) {
      this.setState({
        redirect: articles[idx + 1]
      });
    } else if (direction == "right" && idx > 0) {
      this.setState({
        redirect: articles[idx - 1]
      });
    }
  }
  onStoryEnter() {
    this.setState({
      entering: true
    });
  }
  onStoryEntered() {
    this.setState({
      entering: false
    });
  }
  unexpand() {
    this.props.expandMedia(false);
  }


  closePopupHandler = () => {
    this.setState({
        isShowing: false
    });
  }
 
  render() {
    const { redirect, entering } = this.state;
    const { location, match, media } = this.props;
    return (
      <Page>
        { this.state.isShowing ? <div onClick={this.closePopupHandler} className="back-drop"></div> : null }
        <Popup
          className="popup"
          show={this.state.isShowing}
          close={this.closePopupHandler}>
            <FormattedMessage
              defaultMessage="The data on illegal mining contained in this report represents the time of publication. To view updated data please visit mineria.amazoniasocioambiental.org"
              id="popup.text"
              values={{
                a: msg => (
                  <a class="external_link" target="_blank" href="https://mineria.amazoniasocioambiental.org/">
                    {msg}
                  </a>
                ),
              }}
            />
            {/* <FormattedMessage
            id="popup.text"
            defaultMessage="Os dados sobre mineração ilegal contidos nesta reportagem representam o momento da publicação. Para ver dados atualizados por favor visite mineria.amazoniasocioambiental.org EN"
            /> */}
        </Popup>        
        <Helmet>
          <meta property="og:type" content="article" />
        </Helmet>
        <Story className="content">
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="pages-transition"
              timeout={600}
              onEnter={this.onStoryEnter}
              onEntered={this.onStoryEntered}
            >
              <Switch location={location}>
                <Route exact path={`${match.url}`} component={Chapter1} />
                <Route path={`${match.url}/mercury`}component={Chapter2} />
                <Route path={`${match.url}/protected-areas`} component={Chapter3} />
                <Route path={`${match.url}/indigenous-territories`} component={Chapter4} />
                <Route path={`${match.url}/conflicts`} component={Chapter5} />
                <Route
                  render={() => (
                    <Helmet>
                      <meta name="prerender-status-code" content="404" />
                    </Helmet>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          {!entering ? (
            <footer>
              <Container>
                {!this.isLastArticle() ? (
                  <Paragraph>
                    <a
                      className="continue"
                      onClick={() => this.nextArticle()}
                      href="javascript:void(0);"
                    >
                      <FormattedMessage
                        id="story.continueReading"
                        defaultMessage="Continue reading"
                      />
                      <span className="fa fa-chevron-right" />
                    </a>
                  </Paragraph>
                ) : null}
              </Container>
            </footer>
          ) : null}
          {redirect &&
            redirect !== location.pathname && <Redirect to={redirect} />}
        </Story>
        <Media media={media} preview={true} />
        {media.expanded && (
          <Modal close={this.unexpand}>
            <Media media={media} />
          </Modal>
        )}
      </Page>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    media: state.media
  };
};

const mapDispatchToProps = {
  expandMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
