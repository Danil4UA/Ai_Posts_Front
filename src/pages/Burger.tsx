import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface BurgerProps {
    // toggleSidebar: () => void;
}

const Burger: React.FC<BurgerProps> = () => {
    return (
        <div
            className="burger"
            style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 1100,
            }}
            // onClick={toggleSidebar}
        >
            <MenuIcon />
        </div>
    );
};

export default Burger;