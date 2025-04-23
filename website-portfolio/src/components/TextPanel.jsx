function TextPanel({ title, className, children }) {
    return (
        <div className={className}>
        <h3>{title}</h3>
        <p>
            {children}
        </p>
        </div>
    );
}

export default TextPanel;