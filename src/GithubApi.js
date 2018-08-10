import React from "react";

function withGithubLogin(WrappedComponent, clientId) {
  return class extends React.Component {

    componentWillMount() {
      // const existingToken = sessionStorage.getItem('token');
      const accessToken = "e97ec5db4b2d5e8fc64f772ac0102af521f98055";

      // if (!accessToken && !existingToken) {
      //   window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`)
      // }

      // if (accessToken) {
      //   console.log(`New accessToken: ${accessToken}`);

      //   sessionStorage.setItem("token", accessToken);
      //   this.setState({
      //     token: accessToken
      //   });
      // }
        this.setState({
          token: accessToken
        });
    }

    async get(url) {
      const response = await fetch(`https://api.github.com/${url}?access_token=${this.state.token}`);
      return await response.json();
    }

    render() {
      return (<WrappedComponent get={this.get.bind(this)} {...this.props} />);
    }
  }
}
export default function withGithub(WrappedComponent, clientId) {
  const base = class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  };
  return withGithubLogin(base, clientId);
}
