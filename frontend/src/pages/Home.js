class Home extends React.Component {
  state = {
    descriptionList: {
      api: "Application Programming Interface",
      html: "Hyper Text Markup Language",
      css: "Cascading Style Sheets",
      ajax: "Asynchronous JavaScript And XML",
    },
  };

  render() {
    const { descriptionList } = this.state;

    return (
      <section>
        <h2>설명 목록 리스트 렌더링</h2>
        <dl>
          {
            <dt>{key}</dt>
            <dd>{value}</dd>
          }
        </dl>
      </section>
    );
  }
}

export default Home;
