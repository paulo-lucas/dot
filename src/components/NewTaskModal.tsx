import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  MD3Theme,
  Modal,
  Portal,
  TextInput,
  useTheme,
} from 'react-native-paper';
import useCreateTask from '@src/hooks/useCreateTask';

interface ModalProps {
  visible: boolean;
  onDismiss(): void;
}

const NewTaskModal: React.FC<ModalProps> = ({visible, onDismiss}) => {
  const createTask = useCreateTask();
  const [content, setContent] = useState<string>('');
  const theme = useTheme();
  const styles = getStyles(theme);

  const handlePress = () => {
    createTask(content, new Date());
    onDismiss();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={styles.modalWrapper}
        contentContainerStyle={styles.container}>
        <TextInput
          label="Content"
          value={content}
          autoFocus
          mode="outlined"
          onChangeText={text => setContent(text)}
        />
        <Button
          style={styles.button}
          icon="plus"
          mode="contained"
          disabled={!content}
          onPress={handlePress}>
          Adicionar
        </Button>
      </Modal>
    </Portal>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    modalWrapper: {alignItems: 'center'},
    container: {
      width: '75%',
      padding: 25,
      backgroundColor: theme.colors.surfaceVariant,
    },
    button: {marginTop: 30},
  });

export default NewTaskModal;
