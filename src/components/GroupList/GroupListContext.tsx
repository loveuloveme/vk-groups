import { Group } from '@/types';
import React, { useContext } from 'react';

interface IGroupListContext {
    groups: Group[] | null;
    isError: boolean;
    isLoading: boolean;
}

const initialValue: IGroupListContext = {
    groups: null,
    isError: false,
    isLoading: true
};

export const GroupListContext = React.createContext<IGroupListContext>(initialValue);
export const useGroupList = () => useContext(GroupListContext);

export default GroupListContext;