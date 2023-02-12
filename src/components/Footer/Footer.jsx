import "./footer.scss";

const Footer = ({ active, finished }) => {
  return (
    <footer className="footer">
      <div className="task-info">
        <span>In Active: {active} </span>
        <span>Finished: {finished}</span>
      </div>
      <div className="user-info">
        Kanban
      </div>
    </footer>
  );
};

export default Footer;
