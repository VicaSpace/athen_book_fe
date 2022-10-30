import React, { useEffect, useState } from 'react'

import './bottomNavigationComponent.css'

interface BottomNavigationProps {
    items: BottomNavigationItem[]
    defaultSelected: number
    activeBackgroundColor?: string
    activeTextColor?: string
}

interface BottomNavigationItem {
    title: string
    icon: JSX.Element
    activeIcon: JSX.Element
    onClick?: any
}
const BottomNavigation = ({
    items,
    defaultSelected: defaultSelectedIndex,
    activeBackgroundColor,
    activeTextColor,
}: BottomNavigationProps) => {
    const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex)

    useEffect(() => {
        setSelectedIndex(defaultSelectedIndex)
    }, [defaultSelectedIndex])

    const navItems = items.map((item, index) => {
        return (
            <div
                key={'nav-item-' + index}
                id={'nav-item-' + index}
                className={`bottom-nav-item ${
                    selectedIndex === index && 'active'
                }`}
                style={{ backgroundColor: activeBackgroundColor }}
                onClick={() => {
                    setSelectedIndex(index)
                    if (item.onClick) {
                        item.onClick()
                    }
                }}
            >
                {selectedIndex !== index && item.icon}
                {selectedIndex === index && item.activeIcon}
                {item.title && (
                    <p
                        className="bottom-nav-item--title"
                        style={
                            selectedIndex === index
                                ? { color: activeTextColor }
                                : {}
                        }
                    >
                        {item.title}
                    </p>
                )}
            </div>
        )
    })
    return <div className="bottom-nav">{navItems}</div>
}

export default BottomNavigation
