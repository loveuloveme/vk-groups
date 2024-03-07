import { Avatar, SimpleCell } from '@vkontakte/vkui';
import { IFriendItemProps } from './types';


export const FriendItem = (props: IFriendItemProps) => {
    const {
        first_name, last_name
    } = props;

    return (
        <SimpleCell
            before={<Avatar initials={last_name.slice(0, 1) + '.' + first_name.slice(0, 1) + '.'} />}
        >
            {last_name + ' ' + first_name}
        </SimpleCell>
    );
};
