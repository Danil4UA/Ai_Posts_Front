import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

interface BurgerProps {
    handleBurgerClick: () => void;
    showMenu: boolean;
    setShowMenu: (show: boolean) => void; // уточняем тип для setShowMenu
}

const Burger: React.FC<BurgerProps> = ({ handleBurgerClick, showMenu, setShowMenu }) => {
    const navigate = useNavigate();

    // Функция для навигации и закрытия меню
    const handleNavigate = (path: string) => {
        navigate(path);
        setShowMenu(false); // закрытие меню
    };

    return (
        <>
            {/* Кнопка меню */}
            <div
                className="burger"
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 1100,
                }}
                onClick={handleBurgerClick}
            >
                <MenuIcon />
            </div>

            {/* Затемненный фон */}
            {showMenu && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                        transition: 'opacity 0.3s ease',
                    }}
                    onClick={() => setShowMenu(false)} // Закрытие меню при клике на фон
                />
            )}

            {/* Боковая панель */}
            <div
                style={{
                    height: '100vh',
                    width: '150px',
                    padding: '20px',
                    boxSizing: 'border-box',
                    backgroundColor: 'white',
                    position: 'fixed',
                    top: 0,
                    right: showMenu ? 0 : '-150px', // Плавное выдвижение
                    zIndex: 1100,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    transition: 'right 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '40px',
                }}
            >
                <div onClick={() => handleNavigate('/')}>Dashboard</div>
                <div onClick={() => handleNavigate('/manage')}>Posts</div>
                <div onClick={() => handleNavigate('/settings')}>Settings</div>
                <Logout />
            </div>
        </>
    );
};

export default Burger;