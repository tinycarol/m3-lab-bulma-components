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

    /* const
    obj1 = { a: 'replace a', b: 'keep b' },
    obj2 = { a: 'new value a', c: 'ignore c' };

    for (const key in obj2) if (key in obj1) obj1[key] = obj2[key];

    console.log(props); */

    return (
        <button className={`button `}>{props.children}</button>
    );
};

export default CoolButton;