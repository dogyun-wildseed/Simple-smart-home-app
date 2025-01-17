import classes from '../Helpers/Wrapper.module.css';

const Wrapper = props => {
    return <div className={classes.wrapper}>{props.children}</div>
}

export default Wrapper;