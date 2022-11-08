import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'

import {
	AdminNavigation,
	Button,
	Field,
	Layout,
	Loader,
	SlugWrapper
} from '@/components/ui'
import DismissKeyBoard from '@/components/ui/form-elements/field/DismissKeyboard'
import UploadFile from '@/components/ui/form-elements/upload-field/UploadField'

import { IActorEditInput } from '@/shared/types/actor.interface'

import { generateSlug } from '@/utils/generateSlug'

import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IActorEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Layout isHasPadding>
			<DismissKeyBoard>
				<AdminNavigation title='Edit actor' isBackButton />
				<View>
					{isLoading ? (
						<Loader />
					) : (
						<ScrollView showsVerticalScrollIndicator={false}>
							<Field<IActorEditInput>
								control={control}
								name='name'
								placeholder='Enter name'
								rules={{ required: 'Name is required' }}
							/>

							<SlugWrapper
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
							>
								<Field<IActorEditInput>
									control={control}
									name='slug'
									placeholder='Enter slug'
									rules={{ required: 'Slug is required' }}
								></Field>
							</SlugWrapper>

							<Controller
								control={control}
								name='photo'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error }
								}) => (
									<UploadFile
										onChange={onChange}
										value={value}
										error={error}
										folder='actors'
										placeholder='Photo'
									/>
								)}
								rules={{
									required: 'Photo is required'
								}}
							/>
							<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
								Update
							</Button>
						</ScrollView>
					)}
				</View>
			</DismissKeyBoard>
		</Layout>
	)
}

export default ActorEdit
