import React from "react";

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    });
  }
  render() {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Phyton"];

    return (
      <ul className="flex-center">
        {languages.map((language) => (
          <li key={language}>
            <button style={language === this.state.selectedLanguage ? { color: "red" } : null} className="btn-clear nav-link" onClick={() => this.updateLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Popular;
