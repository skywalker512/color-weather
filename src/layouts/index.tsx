import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from 'react';

export default withRouter(
  ({ location, children  }) =>
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        { children }
      </CSSTransition>
    </TransitionGroup>
)