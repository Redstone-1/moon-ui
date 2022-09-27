import Message from '../components/Message';
/**
 * 复制到剪贴板
 * @param text
 */
export const copyToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    const success = document?.execCommand('copy');
    if (success) {
      Message.success({ content: '复制成功！' });
    } else {
      Message.danger({ content: '复制失败！' });
    }
  } catch (err) {
    Message.warning({ content: `复制失败，错误信息：${err}` });
  }

  document.body.removeChild(textArea);
};
