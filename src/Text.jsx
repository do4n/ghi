import './Text.css';

function Text() {
  return (
    <div className="Text align-center">
      <textarea
        className='text-area mgt-2'
        autoFocus
        rows="4" 
        cols="50"
      />
    </div>
  );
}

export default Text;
