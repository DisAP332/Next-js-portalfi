type NavProps = {
  show: boolean;
  setShow: Function;
};

export default function Navigation(Props: NavProps) {
  let show;
  if (!Props.show) {
    show = {
      display: "none",
    };
  } else {
    show = {
      display: "block",
    };
  }

  return (
    <div className="navigation-tablet" style={show}>
      <div>eeeee</div>
    </div>
  );
}
