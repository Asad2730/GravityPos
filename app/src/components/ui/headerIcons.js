import React from 'react'

import { AiOutlineUserAdd } from 'react-icons/ai';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';
import IconButton from './iconButton';

function HeaderIcons() {
    return (
        <>
            <IconButton
                title={'Add Stock'}
                Icon={AiOutlineUserAdd}
                size={30}
                w={28}
                h={12}
                direction={'row'}
            />

            <IconButton
                title={'Export'}
                Icon={PiExportBold}
                size={30}
                w={28}
                h={12}
                direction={'row'}
            />

            <IconButton
                title={'Print'}
                Icon={HiPrinter}
                size={30}
                w={28}
                h={12}
                direction={'row'}
            />



        </>
    )
}

export default HeaderIcons;