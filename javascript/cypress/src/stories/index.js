import React from 'react';

import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {Login} from '../components/Login';
import Header from '../components/Header';

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('no user', () => <Header appName="Blog App" />)
  .add('with user', () => <Header appName="Blog App" currentUser={{userName: 'giltayar'}}/>);

storiesOf('Login', module)
  .addDecorator(StoryRouter())
  .add('empty', () => <Login />)
  .add('with text', () => <Login email="gil@tayar.org" password="apassword" />);
