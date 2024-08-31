// SongModal.tsx
import React from 'react';
import styled from '@emotion/styled';

interface SongModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  newSong: { _id: string; title: string; artist: string; album: string; genre: string };
  setNewSong: (song: { _id: string; title: string; artist: string; album: string; genre: string }) => void;
  isEditing: boolean;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  margin: 100px auto;
  position: relative;
`;

const Input = styled.input`
   width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const SongModal: React.FC<SongModalProps> = ({ isOpen, onClose, onSave, newSong, setNewSong, isEditing }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <h2>{isEditing ? 'Update Song' : 'Add a New Song'}</h2>
        <Input
          type="text"
          placeholder="Title"
          value={newSong.title}
          onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Artist"
          value={newSong.artist}
          onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Album"
          value={newSong.album}
          onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
          required
        />
        <Select
          value={newSong.genre}
          onChange={(e) => setNewSong({ ...newSong, genre: e.target.value })}
          required
        >
          {/* Replace these options with your actual genre options */}
          <option value="">Select Genre</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
        </Select>
        <Button onClick={onSave}>{isEditing ? 'Update Song' : 'Add Song'}</Button>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongModal;
