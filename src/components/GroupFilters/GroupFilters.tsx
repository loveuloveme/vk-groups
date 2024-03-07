import { Group, Header, FormItem, FormLayoutGroup, Select } from '@vkontakte/vkui';

export const GroupFilters = () => {
    return (
        <Group header={<Header mode="secondary">Фильтры</Header>}>

            <FormLayoutGroup mode="horizontal">
                <FormItem
                    top="Тип приватности"
                >
                    <Select
                        options={[
                            { label: 'Все', value: 'any' },
                            { label: 'Закрытая', value: 'closed' },
                            { label: 'Открытая', value: 'opened' },
                        ]} />
                </FormItem>
                <FormItem
                    top="Цвет"
                >
                    <Select
                        options={[
                            { label: 'Все', value: 'any' },
                            { label: 'Закрытая', value: 'closed' },
                            { label: 'Открытая', value: 'opened' },
                        ]} />
                </FormItem>
                <FormItem
                    top="Наличие друзей"
                >
                    <Select
                        options={[
                            { label: 'Все', value: 'any' },
                            { label: 'Да', value: 'closed' },
                            { label: 'Нет', value: 'opened' },
                        ]} />
                </FormItem>
            </FormLayoutGroup>
            {/*
                <FormLayoutGroup mode="horizontal">
                    <FormItem top="Avatar.Badge or Avatar.BadgeWithPreset">
                        <Select
                            options={[
                                { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
                                { label: '📝 Avatar.Badge', value: 'header-1', disabled: true },
                                {
                                    label: 'children={<Icon20GiftCircleFillRed />}',
                                    value: 'children',
                                },
                                {
                                    label: '📝 Avatar.BadgeWithPreset',
                                    value: 'header-2',
                                    disabled: true,
                                },
                                { label: 'preset="online"', value: 'online', hierarchy: 1 },
                                { label: 'preset="online-mobile"', value: 'online-mobile' },
                            ]}
                            value={badge}
                            onChange={(e) => setBadge(e.target.value)}
                        />
                    </FormItem>
                    <FormItem top="Avatar.Badge[background]">
                        <Select
                            options={[
                                { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
                                { label: 'stroke', value: 'stroke' },
                                { label: 'shadow', value: 'shadow' },
                            ]}
                            value={badgeBackground}
                            disabled={badge !== 'children'}
                            onChange={(e) => setBadgeBackground(e.target.value)}
                        />
                    </FormItem>
                </FormLayoutGroup>

                <FormLayoutGroup mode="horizontal">
                    <FormItem top="Avatar.Overlay">
                        <Checkbox checked={overlay} onChange={(e) => setOverlay(e.target.checked)}>
                            overlay (example, Icon24AddOutline, Icon28AddOutline)
                        </Checkbox>
                    </FormItem>
                </FormLayoutGroup>

                <FormLayoutGroup mode="horizontal">
                    <FormItem top="Avatar.Overlay[theme]">
                        <Select
                            options={[
                                { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
                                { label: 'light', value: 'light' },
                                { label: 'dark', value: 'dark' },
                            ]}
                            value={overlayTheme}
                            disabled={!overlay}
                            onChange={(e) => setOverlayTheme(e.target.value)}
                        />
                    </FormItem>
                    <FormItem top="Avatar.Overlay[visibility]">
                        <Select
                            options={[
                                { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
                                { label: 'on-hover', value: 'on-hover' },
                                { label: 'always', value: 'always' },
                            ]}
                            value={overlayVisibility}
                            disabled={!overlay}
                            onChange={(e) => setOverlayVisibility(e.target.value)}
                        />
                    </FormItem>
                </FormLayoutGroup> */}
        </Group>
    );
};
