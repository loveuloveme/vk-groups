import { SimpleCell, Avatar, Button } from '@vkontakte/vkui';
import numberWithSpaces from '@/helpers/numberWithSpaces';
import { useState } from 'react';
import FriendList from '../FriendList/';
import { IGroupItemProps } from './types';

export const GroupItem = (props: IGroupItemProps) => {
    const {
        avatar_color, name, members_count, closed, friends
    } = props;

    const [friendsExpanded, setFriendsExpanded] = useState<boolean>(false);

    const isFriendsSubs = friends && friends.length;

    return (
        <>
            <SimpleCell
                style={{
                    minHeight: '100px'
                }}
                before={
                    avatar_color ? <Avatar
                        size={100}
                        gradientColor="custom"
                        style={{
                            backgroundColor: avatar_color ?? 'transparent',
                        }}
                    /> : null
                }
                after={isFriendsSubs ?
                    <Button
                        mode='tertiary'
                        size='l'
                        activeEffectDelay={0}
                        activated={friendsExpanded}
                        onClick={() => setFriendsExpanded(prev => !prev)}
                    >
                        Показать {friends?.length} друзей
                    </Button>
                    : null
                }
                subtitle={(closed ? 'Закрытое' : 'Открытое') + ' сообщество'}
                extraSubtitle={numberWithSpaces(members_count) + ' подписчиков'}
                hasActive={false}
                hasHover={false}
            >
                {name}
            </SimpleCell>

            {isFriendsSubs ?
                <FriendList
                    expanded={friendsExpanded}
                    friends={friends} />
                : null}
        </>
    );
};
