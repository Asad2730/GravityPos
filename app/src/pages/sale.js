import React from 'react'
import Table from '../components/table/table';
import CustomInput from '../components/ui/input';
import IconButton from '../components/ui/iconButton';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineReload, AiOutlinePauseCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {  secondary_color } from '../utils/colors';
import { GiCancel } from "react-icons/gi";
import { BsSendCheck } from "react-icons/bs";
import CustomDropDown from '../components/ui/dropDown';
import logo from '../assets/logo_normal.png';

const tr = [
  {
    code: '1', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
  },
  {
    code: '2', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
  },
  {
    code: '3', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
  },
  {
    code: '4', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
  },
]

const th = [
  'Code',
  'Product Name',
  'Bonus',
  'Qty',
  'Batch#',
  'Expiry Date',
  'D%',
  'Disc',
  'Price',
  'Amount'
];


const iconSize = 40;


export default function Sale() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-row '>
          <div className='w-[80%] h-auto flex flex-col' style={{ backgroundColor: secondary_color }}>
            <div className='flex flex-row justify-center items-center'>
              <img src={logo} className='w-60 h-16 ml-5' />
              <div className='flex flex-col mr-10 ml-4'>
                <div className='flex flex-row my-2'>
                <CustomInput
                height={35}
                 />
                <CustomInput 
                   height={35}
                />
                
                </div>
                <div className='flex flex-row '>
                  <span className='m-3'>Client Type</span>
                  <CustomDropDown />
                  <span className='m-3'>Client Name</span>
                  <CustomInput 
                   height={35} />
                </div> 
                <div className='flex flex-row mt-2'>
                  <span className='m-3'>Code</span>
                  <CustomInput
                  height={35}  />

                  <span className='m-3'>Name</span>
                  <CustomInput
                     height={35} />

                  <span className='m-3'>Bonus</span>
                  <CustomInput 
                     height={35} />
                  <span className='m-3'>Qty</span>
                  <CustomInput
                    height={35}  />

                  <span className='m-3'>Disc%</span>
                  <CustomInput 
                   height={35} />

                  <span className='m-3'>Up</span>
                  <CustomInput 
                   height={35} />
                  
                </div>
                <div className='flex flex-row mt-2'>
                <CustomInput 
                   height={35}
                />
                  <CustomInput type={'checkbox'}/>
                    <span className='ml-4 '>Check Price</span>
                    <span className='ml-4' />
                    <CustomInput type={'checkbox'} />
                    <span className='ml-4'>Search by generic</span>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between mb-5">
              <div className="">
                <Table
                  th={th}
                  tr={tr}
                />
              </div>
            </div>
          </div>
          <div className='w-[20%] h-auto' style={{ backgroundColor: secondary_color }}>
            <div className='flex flex-row'>
              <IconButton
                Icon={AiOutlineDelete}
                title={'Clear Sale'}
                size={iconSize}
              />
              <IconButton
                Icon={GiCancel}
                title={'Cancel Item'}
                size={iconSize}
              />
            </div>
            <div className='flex flex-row'>
              <IconButton
                Icon={AiOutlineReload}
                title={'Return'}
                size={iconSize}

              />
              <IconButton
                Icon={AiOutlineEdit}
                title={'Edit'}
                size={iconSize}

              />
            </div>
            <div className='flex flex-row'>
              <IconButton
                Icon={AiOutlinePauseCircle}
                title={'Hold'}
                size={iconSize}

              />
              <IconButton
                Icon={CiCircleRemove}
                title={'Cancellation'}
                size={iconSize}

              />
            </div>
            <div className='flex flex-row'>
              <IconButton
                Icon={BsSendCheck}
                title={'pay'}
                size={60}
                width={333}
                height={130}
              />
            </div>
          </div>

        </div>
        <div className='flex flex-row h-[11.3rem]'>
          <div className='flex flex-col w-1/5'>
            <div className='flex flex-row  items-center justify-center m-2'>
              <span className='text-white w-40'>No of item</span>
              <CustomInput 
               />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
              <span className='text-white w-40'> Total Qty </span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
              <span className='text-white w-52'> Add amount </span>
              <CustomInput />
            </div>
          </div>
          <div className='flex flex-col w-1/5'>
            <div className='flex flex-row  items-center justify-center  m-2'>
              <span className='text-white w-52'>  Total amount  </span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
              <span className='text-white w-52 mb-4 '> Total items</span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
              <span className='text-white w-52 mb-4 '>  Item disc</span>
              <CustomInput />
            </div>
          </div>
          <div className='flex flex-col w-1/5'>
            <div className='flex flex-row  items-center justify-center  m-2'>
            <span className='text-white w-52 mb-4 '>  Previous bal </span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
            <span className='text-white w-52 mb-4 '>  Paid amount </span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
              <span className='text-white w-52 mb-4 '>  Item disc</span>
              <CustomInput />
            </div>
          </div>
          <div className='flex flex-col w-1/5'>
            <div className='flex flex-row  items-center justify-center  m-2'>
            <span className='text-white w-52 '> Disc By% </span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
            <span className='text-white w-52 '> Disc By LS </span>
              <CustomInput />
            </div>
            <div className='flex flex-row  items-center justify-center  m-2'>
            <span className='text-white w-52 '> Balance </span>
              <CustomInput />
            </div>
          </div>
          <div className='flex flex-col w-1/5 justify-center items-center text-center'>
          <span className='text-white w-52  text-6xl font-bold'> 000</span>
          <span className='text-white w-52  text-3xl font-bold'> Items</span>
          </div>
        </div>
      </div>
    </>
  )
}



