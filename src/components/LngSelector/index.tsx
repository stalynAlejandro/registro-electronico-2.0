import { styled } from '@mui/system';
import { useState } from 'react';
import { Button, Menu, MenuItem, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export interface LngSelectorProps {
    currentLng: string;
    listLng: { label: string; value: string }[];
    changeLng: (lng: string) => void;
}

export const LngSelector = ({ currentLng, listLng, changeLng }: LngSelectorProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    return (
        <>
            <Tooltip title={'CambiarIdioma'}>
                <Button
                    disableElevation
                    onClick={handleClick}
                    children={
                        <>
                            <LanguageIcon />
                            {currentLng}
                        </>
                    }
                />
            </Tooltip>
            <Menu
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handleClose}>
                {listLng?.map(({ label, value }) => (
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            changeLng(value);
                        }}
                        children={label}
                    />
                ))}
            </Menu>
        </>
    );
};
