import React from 'react';
import './SidebarChannel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch(setChannelInfo);
  return (
    <div
      className='sidebarChannel'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className='sidebarChannel_hash'>#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
