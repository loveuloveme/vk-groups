import { SimpleCell } from '@vkontakte/vkui';
import { IFriendItemProps } from './types';


export const FriendItem = (props: IFriendItemProps) => {
    const {
        first_name, last_name
    } = props;

    return (
        <SimpleCell>
            {last_name + ' ' + first_name}
        </SimpleCell>
    );
};
