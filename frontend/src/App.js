<<<<<<< HEAD
import LogIn from "./pages/LogIn.js";
import Browse from "./pages/Browse.js";
import Home from "./pages/Home.js";
import { likeLionMembers } from "./data/likeLionMembers.js";
=======
import LogIn from './pages/LogIn.js';
import Browse from './pages/Browse.js';
import Home from './pages/Home.js';
import { likeLionMembers } from './data/likeLionMembers.js';
>>>>>>> c5a4bbd30c24fe4a7a3ec21ac32d27a09344db6f

class App extends React.Component {
  state = {
    headline: "React Application",
    isPaid: true,
    isToggle: false,
    isLoading: !true,
    hasError: null,
<<<<<<< HEAD
    likeLionMembers,
=======
    likeLionMembers
>>>>>>> c5a4bbd30c24fe4a7a3ec21ac32d27a09344db6f
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = "NEW HEADLINE! 😃";

  handleChangeHeadline = () => {
    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.originalHeadline,
      });
    } else {
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadline,
      });
    }
  };

  render() {
<<<<<<< HEAD
    const { isLoading, isToggle, isPaid, headline, hasError, likeLionMembers } = this.state;
=======
    const { 
      isLoading, 
      isToggle, 
      isPaid, 
      headline, 
      hasError, 
      likeLionMembers 
    } = this.state;
>>>>>>> c5a4bbd30c24fe4a7a3ec21ac32d27a09344db6f

    if (isLoading) {
      return <div role="alert">데이터 로딩 중...</div>;
    }

    if (hasError) {
      return <div role="alert">{hasError.message}</div>;
    }

    return <Home likeLionMembers={likeLionMembers} />;

    return (
      <div className="App">
        <h1>{headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          {isToggle ? "오리지널 헤드라인으로 변경" : "뉴 헤드라인으로 변경"}
        </button>

        <LogIn />

        {isPaid && <Browse />}
      </div>
    );
  }
}

export default App;
