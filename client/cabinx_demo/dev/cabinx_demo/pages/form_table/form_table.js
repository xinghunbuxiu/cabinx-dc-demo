import { getCategories } from '../../api/index';
import CabinXComps from '../../dynamic-component/cabinx-components';
import DynamicComponent from '../../dynamic-component/cabinx-dynamic-component-wrap';
export default XPage({
  components: {
    'dynamic-component': DynamicComponent
  },
  data: {
    cabinxComponents: CabinXComps,
    baseUrl: 'http://rdcabinxdcdemo-partner.dmall.com',
    ajax: {
      url: '//testapi-nodedmallos.dmall.com/cabinx/pcapi/table/data',
    },
    educations: [],
    columnSettable: {
      draggable: true,    // 可以拖动
      persist: true,
      tips: '自定义列'
    },
    formData: {
      class: '',
      name: ''
    },
    tableItemInfo: {}

  },

  show () {
    this.init();
    const dyc = this.getComponent('dyc')
    getCategories()
      .then(content => {
        dyc.load(content)
      })
  },

  init () {
    this.setData({
      educations: [
        { label: '全部', value: '' }, { label: '大专', value: '大专' }, { label: '本科', value: '本科' }
      ],
    });
  },

  search (value) {
    const table = this.getComponent('table');

    table.query({ params: value });
  },

  handleEdit (name) {
    CabinX.alert({
      title: '编辑',
      text: `${name}Edit`,
    });
  },

  handleOper (name) {
    CabinX.alert({
      title: '操作',
      text: `${name}Oper`
    });
  },

  handleToolClick (tool) {
    const { name } = tool;

    console.log('tool ', tool);
  },
  seeDetail (data) {
    this.showTablePop();
    setTimeout(() => {
      this.getComponent('tablePopForm').setData({ ...data })
    }, 33)
  },
  showTablePop () {
    this.getComponent('tablePop').show();
  },
  hideTablePop () {
    this.getComponent('tablePop').hide();
  },
  // 表格列的变动后会触发这个方法（拖动、展示、隐藏、pin）
  tableFilterChange (data = []) {
    const fields = [];

    data.forEach((item) => {
      // 表格cell 上设置了名称 并且 visible 是ture 就代表是显示
      if (item.visible !== false && item.name) {
        fields.push(item.name)
      }
    })


    console.log('tableFilterChange: ', fields)

    return fields
  },

  showPop () {
    this.getComponent('demoPop').show();
  },

  hidePop () {
    this.getComponent('demoPop').hide();
  },

  submitForm () {
    this.getComponent('demoForm').validate((data) => {
      return;

      this.setData({
        formData: formData
      });
      this.hidePop();
    });
  }
});


