import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGenres';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={(<BsChevronDown />) as React.ReactElement}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
