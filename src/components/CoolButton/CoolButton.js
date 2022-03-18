import './CoolButton.css';

const CoolButton = props => {
    const btnCases = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
    }

    const newProps = { ...props };

    for (const key in btnCases) {
        if (key in newProps) {
            newProps[key] = btnCases[key];
        }
    };

    let btnClasses = '';

    for (const key in newProps) {
        if(key === 'children') {
            continue;
        }
        btnClasses += `${newProps[key]} `;
    };

    return (
        <button className={`button ${btnClasses}`}>{newProps.children}</button>
    );
};

export default CoolButton;