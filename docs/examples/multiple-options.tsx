/* eslint-disable no-console */
import React from 'react';
import Select from '@sweet7/rc-select';
import '../../assets/index.less';

const selectOptions = [];
for (let i = 10; i < 36; i += 1) {
  selectOptions.push({
    label: `中文${i}`,
    value: i.toString(36) + i,
    desc: `中文${i}${i.toString(36) + i}`,
    disabled: i === 10,
  });
}

class Test extends React.Component {
  state = {
    useAnim: false,
    showArrow: false,
    loading: false,
    value: ['a10'],
  };

  onChange = (value, options) => {
    console.log('onChange', value, options);
    this.setState({
      value,
    });
  };

  onSelect = (...args) => {
    console.log(args);
  };

  onDeselect = (...args) => {
    console.log(args);
  };

  useAnim = (e) => {
    this.setState({
      useAnim: e.target.checked,
    });
  };

  showArrow = (e) => {
    this.setState({
      showArrow: e.target.checked,
    });
  };

  loading = (e) => {
    this.setState({
      loading: e.target.checked,
    });
  };

  render() {
    const { useAnim, showArrow, loading, value } = this.state;
    return (
      <div>
        <h2>multiple select（scroll the menu）</h2>

        <p>
          <label htmlFor="useAnim">
            anim
            <input id="useAnim" checked={useAnim} type="checkbox" onChange={this.useAnim} />
          </label>
          <label htmlFor="showArrow">
            showArrow
            <input id="showArrow" checked={showArrow} type="checkbox" onChange={this.showArrow} />
          </label>
        </p>
        <p>
          <label htmlFor="loading">
            loading
            <input id="loading" checked={loading} type="checkbox" onChange={this.loading} />
          </label>
        </p>

        <div style={{ width: 300 }}>
          <Select
            autoFocus
            options={selectOptions}
            value={value}
            animation={useAnim ? 'slide-up' : null}
            choiceTransitionName="rc-select-selection__choice-zoom"
            style={{ width: 500 }}
            mode="multiple"
            loading={loading}
            showArrow={showArrow}
            allowClear
            optionFilterProp="desc"
            onSelect={this.onSelect}
            onDeselect={this.onDeselect}
            placeholder="please select"
            onChange={this.onChange}
            onFocus={() => console.log('focus')}
            onBlur={(v) => console.log('blur', v)}
            tokenSeparators={[' ', ',']}
          />
        </div>
      </div>
    );
  }
}

export default Test;
/* eslint-enable */
