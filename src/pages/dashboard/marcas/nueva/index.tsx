import ItemForm from '../../../../components/forms/item-form'
import Layout from '../../../../ui/layout'

export default function AddBrandPage() {
	return (
		<Layout>
			<ItemForm table='brands' name='marcas' />
		</Layout>
	)
}
