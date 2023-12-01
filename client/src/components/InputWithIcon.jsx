const InputWithIcon = ({
  icon,
  input_type,
  icon_color = "text-rambow-300",
  placeholder = "",
  id,
}) => {
  return (
    <div className="flex bg-white rounded-md overflow-hidden">
      <label
        className={`material-symbols-rounded filled ${icon_color} shrink-0 border-r border-rambow-400 p-1`}
        htmlFor={id}
      >
        {icon}
      </label>
      <input
        id={id}
        className="flex-grow px-2 rounded-r-md"
        placeholder={placeholder}
        type={input_type}
      />
    </div>
  );
};

export default InputWithIcon;
