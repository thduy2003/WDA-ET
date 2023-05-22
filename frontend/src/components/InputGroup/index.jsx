import React from 'react';



export const InputGroup = ({
    size,
    name,
    placeholder,
    className,
    left,
    right,
    value,
    maxHeight,
    onChange,
    onKeyUp,
}) => {
    const refInput = React.useRef(null);

    const refLeft = React.useRef(null);
    const [pre, setPre] = React.useState(0);
    React.useEffect(() => {
        if (refLeft.current) {
            setPre(refLeft.current.offsetWidth);
            refInput.current?.style.setProperty(
                'padding-left',
                refLeft.current.offsetWidth + 10 + 'px',
                'important',
            );
        }
    }, [refLeft]);

    const refRight = React.useRef < HTMLDivElement | null > (null);
    const [rig, setRig] = React.useState(0);
    React.useEffect(() => {
        if (refRight.current) {
            setRig(refRight.current.offsetWidth);
        }
    }, [refRight]);

    return (
        <div className={className}>
            <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                {left && (
                    <div
                        ref={refLeft}
                        className="pl-4 absolute inset-y-0 left-0 m-1 items-center flex align-middle">
                        {left}
                    </div>
                )}
                <input
                    ref={refInput}
                    style={{
                        paddingRight: rig + 15,
                        height:
                            size === 'small'
                                ? '40px'
                                : size === 'medium'
                                    ? '54px'
                                    : size === 'large'
                                        ? '60px'
                                        : '54px',
                    }}
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={
                        maxHeight +
                        ' p-4 block w-full text-sm text-[#FAFBFC] border border-gray-300 rounded-[8px] bg-transparent  outline-none'
                    }
                    placeholder={placeholder}
                    onKeyUp={onKeyUp}
                />

                {right && (
                    <div
                        ref={refRight}
                        className="input-group-btn absolute inset-y-0 right-0 m-1 items-center flex align-middle">
                        {right}
                    </div>
                )}
            </div>
        </div>
    );
};
