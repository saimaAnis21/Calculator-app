import operate from '../logic/operate';

describe('Testing Operate Module', () => {
  it('Testing + operation', () => {
    expect(operate('4', '5', '+')).toEqual('9');
  });

  it('Testing - operation', () => {
    expect(operate('4', '5', '-')).toEqual('-1');
  });

  it('Testing X operation', () => {
    expect(operate('4', '5', 'X')).toEqual('20');
  });

  it('Testing / operation', () => {
    expect(operate('20', '5', '/')).toEqual('4.00000');
  });

  it('Testing / by 0', () => {
    expect(operate('20', '0', '/')).toEqual('undefined');
  });

  it('Testing % operation', () => {
    expect(operate('20', '5', '%')).toEqual('0.20000');
  });
});
