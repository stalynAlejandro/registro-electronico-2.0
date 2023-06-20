import { useState } from 'react';
import { Button, Menu, MenuItem, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export interface LngSelectorProps {
    tooltip: string;
    currentLng: string;
    listLng: { label: string; value: string }[];
    changeLng: (lng: string) => void;
}

export const LngSelector = ({ tooltip, currentLng, listLng, changeLng }: LngSelectorProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    return (
        <>
            <Tooltip title={tooltip}>
                <Button
                    sx={{
                        margin: 5,
                        color: 'black',
                        fontSize: 20,
                        '& svg': {
                            mr: 1,
                        },
                    }}
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
                {listLng?.map(({ label, value }, index) => (
                    <MenuItem
                        key={index}
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
