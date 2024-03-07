import { Accordion } from '@vkontakte/vkui';
import FriendItem from '../FriendItem/';
import { IFriendListProps } from './types';

export const FriendList = (props: IFriendListProps) => {
    const { friends, ...rest } = props;

    return (
        <Accordion
            {...rest}
        >
            <Accordion.Content>
                {friends?.map((user, idx) => <FriendItem {...user} key={`user-${idx}`} />)}
            </Accordion.Content>
        </Accordion>
    );
};
